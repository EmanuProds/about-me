import { NextResponse } from "next/server";

/**
 * Query GraphQL para buscar estatísticas básicas do usuário GitHub.
 * Obtém repositórios públicos, contribuições totais e data de criação da conta.
 */
const GITHUB_GRAPHQL_QUERY = `
query ($username: String!) {
  user(login: $username) {
    public_repos: repositories(privacy: PUBLIC) {
      totalCount
    }
    contributionsCollection {
      contributionCalendar {
        totalContributions
      }
    }
    createdAt
  }
}`;

/**
 * Endpoint POST para buscar estatísticas do GitHub.
 * Processa dados do GraphQL e calcula anos de experiência baseado na data de criação da conta.
 */
export async function POST(request: Request) {
  const { username } = await request.json();

  if (!username) {
    return NextResponse.json({ error: "Nome de usuário é obrigatório" }, { status: 400 });
  }

  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

  if (!GITHUB_TOKEN) {
    return NextResponse.json(
      { error: "Token de acesso ao GitHub não configurado no servidor." },
      { status: 500 }
    );
  }

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${GITHUB_TOKEN}`,
      },
      body: JSON.stringify({
        query: GITHUB_GRAPHQL_QUERY,
        variables: { username: username },
      }),
    });

    if (!response.ok) {
      console.error(
        `Erro ao buscar GraphQL: ${response.status} ${response.statusText}`
      );
      return NextResponse.json(
        { error: "Falha na comunicação com o GitHub API." },
        { status: 500 }
      );
    }

    const githubData = await response.json();

    const user = githubData.data?.user;
    if (!user) {
      return NextResponse.json(
        { error: "Usuário não encontrado no GitHub." },
        { status: 404 }
      );
    }

    const publicRepos = user.public_repos?.totalCount || 0;
    const totalContributions =
      user.contributionsCollection?.contributionCalendar?.totalContributions ||
      0;
    const createdAt = user.createdAt;

    const yearsOfExperience = createdAt
      ? new Date().getFullYear() - new Date(createdAt).getFullYear()
      : 0;

    return NextResponse.json({
      publicRepos,
      totalContributions,
      yearsOfExperience,
    });
  } catch (error) {
    console.error("Erro no API Endpoint:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor." },
      { status: 500 }
    );
  }
}
