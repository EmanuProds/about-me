import { NextResponse } from 'next/server';

// Sua QUERY GraphQL para obter o total de contribuições
const GITHUB_GRAPHQL_QUERY = `
query ($username: String!) {
  user(login: $username) {
    contributionsCollection {
      contributionCalendar {
        totalContributions
      }
    }
  }
}
`;

// A função POST é tipicamente usada para queries que buscam dados
export async function POST(request: Request) {
  // 1. Obtenha o nome de usuário do corpo da requisição
  const { username } = await request.json();

  if (!username) {
    return NextResponse.json({ error: "Nome de usuário é obrigatório" }, { status: 400 });
  }

  // 2. TOKEN DE ACESSO SECRETO
  // Use a variável de ambiente para manter seu token seguro.
  // Crie uma variável no seu arquivo .env.local: GITHUB_TOKEN="seu_token_aqui"
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

  if (!GITHUB_TOKEN) {
    // Isso deve ser resolvido antes de deploy, mas é um bom check de segurança
    return NextResponse.json({ error: "Token de acesso ao GitHub não configurado no servidor." }, { status: 500 });
  }

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Envia o token de forma segura, pois está no backend
        Authorization: `bearer ${GITHUB_TOKEN}`,
      },
      body: JSON.stringify({
        query: GITHUB_GRAPHQL_QUERY,
        variables: { username: username },
      }),
    });

    if (!response.ok) {
        // Loga o erro, mas não expõe detalhes do token ao cliente
        console.error(`Erro ao buscar GraphQL: ${response.status} ${response.statusText}`);
        return NextResponse.json({ error: "Falha na comunicação com o GitHub API." }, { status: 500 });
    }

    const githubData = await response.json();
    
    // Extrai o número total de contribuições
    const totalContributions = 
        githubData.data?.user?.contributionsCollection?.contributionCalendar?.totalContributions || 0;

    return NextResponse.json({ totalContributions });
    
  } catch (error) {
    console.error("Erro no API Endpoint:", error);
    return NextResponse.json({ error: "Erro interno do servidor." }, { status: 500 });
  }
}