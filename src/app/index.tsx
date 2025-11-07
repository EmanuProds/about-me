import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  ScrollView, 
  Image, 
  TouchableOpacity, 
  useColorScheme,
  Platform, // Adicionado para verificação de ambiente, comum em Expo/RN
} from 'react-native';

// --- Dados Mock para os Cards do Portfólio ---
interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: '1',
    title: 'Projeto SaaS Financeiro',
    description: 'Desenvolvimento completo de uma plataforma web e mobile para gestão financeira pessoal.',
    tags: ['React Native', 'TypeScript', 'Node.js', 'Firestore'],
  },
  {
    id: '2',
    title: 'Landing Page de E-commerce',
    description: 'Design responsivo e otimizado para conversão de uma loja virtual de calçados.',
    tags: ['HTML', 'Tailwind CSS', 'JavaScript'],
  },
  {
    id: '3',
    title: 'API de Microserviços',
    description: 'Criação de microsserviços para processamento de pedidos utilizando Go e Kafka.',
    tags: ['Go', 'Kafka', 'Docker', 'Kubernetes'],
  },
];

// --- Configuração de Estilos e Temas ---

// Paleta de cores baseada em "slate"
const colors = {
  slate: {
    light: {
      bgPrimary: '#f8fafc', // slate-50
      bgSecondary: '#ffffff',
      textPrimary: '#0f172a', // slate-900
      textSecondary: '#475569', // slate-600
      accent: '#64748b', // slate-500
      border: '#e2e8f0', // slate-200
    },
    dark: {
      bgPrimary: '#0f172a', // slate-900
      bgSecondary: '#1e293b', // slate-800
      textPrimary: '#f8fafc', // slate-50
      textSecondary: '#94a3b8', // slate-400
      accent: '#94a3b8', // slate-400
      border: '#334155', // slate-700
    },
  },
};

// Hook personalizado para obter cores do tema
const useThemeColors = () => {
  const scheme = useColorScheme(); // 'light' ou 'dark'
  const isDark = scheme === 'dark';
  const palette = isDark ? colors.slate.dark : colors.slate.light;

  const dynamicStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: palette.bgPrimary,
    },
    section: {
      paddingHorizontal: 16,
      paddingVertical: 32,
      backgroundColor: palette.bgPrimary,
      width: '100%',
      maxWidth: 900, // Simulação de container mx-auto
      alignSelf: 'center',
    },
    cardBackground: {
      backgroundColor: palette.bgSecondary,
      borderColor: palette.border,
    },
    textPrimary: {
      color: palette.textPrimary,
    },
    textSecondary: {
      color: palette.textSecondary,
    },
    accentColor: {
      color: palette.accent,
    },
    // Tipografia (emulação de Tailwind)
    text2xl: {
      fontSize: 24,
      fontWeight: '700',
    },
    text3xl: {
      fontSize: 30,
      fontWeight: '800',
    },
    textSm: {
      fontSize: 12,
    },
  });

  return { palette, isDark, dynamicStyles };
};

// --- Componente 1: Header ---
const Header: React.FC = () => {
  const { palette, dynamicStyles } = useThemeColors();
  
  return (
    <View style={[styles.headerContainer, { borderBottomColor: palette.border }]}>
      <Text style={[dynamicStyles.textPrimary, dynamicStyles.text2xl, styles.headerTitle]}>
        Meu Portfólio
      </Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={[dynamicStyles.textSecondary, dynamicStyles.textSm, {marginRight: 8}]}>
          {palette.textPrimary === colors.slate.dark.textPrimary ? 'Modo Escuro' : 'Modo Claro'}
        </Text>
        {/* RN Web adapta automaticamente com useColorScheme, não é necessário um toggle manual se confiarmos no sistema */}
        <Text style={dynamicStyles.accentColor}>
            {/* Ícone de sol/lua (usando emoji ou biblioteca de ícones) */}
            {palette.textPrimary === colors.slate.dark.textPrimary ? '🌙' : '☀️'}
        </Text>
      </View>
    </View>
  );
};

// --- Componente 2: Avatar e Introdução ---
const AvatarSection: React.FC = () => {
  const { dynamicStyles } = useThemeColors();

  return (
    <View style={[dynamicStyles.section, styles.avatarSection]}>
      <Image
        source={{ uri: 'https://placehold.co/120x120/475569/ffffff?text=AVATAR' }}
        style={styles.avatarImage}
      />
      <Text style={[dynamicStyles.textPrimary, dynamicStyles.text3xl, { marginTop: 16 }]}>
        Olá, eu sou o [Seu Nome]!
      </Text>
      <Text style={[dynamicStyles.textSecondary, { marginTop: 8, textAlign: 'center' }]}>
        Desenvolvedor Full-Stack apaixonado por tecnologias modernas como React Native, TypeScript e Expo.
      </Text>
    </View>
  );
};

// --- Componente de Card Individual ---
const CardItem: React.FC<{ item: PortfolioItem }> = ({ item }) => {
  const { dynamicStyles } = useThemeColors();
  
  return (
    <TouchableOpacity
      style={[dynamicStyles.cardBackground, styles.card]}
      // onPress={() => Linking.openURL('URL_DO_PROJETO')}
    >
      <Text style={[dynamicStyles.textPrimary, dynamicStyles.text2xl]}>
        {item.title}
      </Text>
      <Text style={[dynamicStyles.textSecondary, { marginTop: 8 }]}>
        {item.description}
      </Text>
      <View style={styles.tagContainer}>
        {item.tags.map((tag, index) => (
          <Text 
            key={index} 
            style={[dynamicStyles.accentColor, dynamicStyles.textSm, styles.tag]}
          >
            #{tag}
          </Text>
        ))}
      </View>
    </TouchableOpacity>
  );
};

// --- Componente 3: Cards de Portfólio ---
const PortfolioCards: React.FC = () => {
  const { dynamicStyles } = useThemeColors();
  
  return (
    <View style={dynamicStyles.section}>
      <Text style={[dynamicStyles.textPrimary, dynamicStyles.text3xl, { marginBottom: 20, textAlign: 'center' }]}>
        Meus Projetos
      </Text>
      <View style={styles.cardList}>
        {PORTFOLIO_DATA.map(item => (
          <CardItem key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
};

// --- Componente 4: Footer ---
const Footer: React.FC = () => {
  const { dynamicStyles, palette } = useThemeColors();
  
  return (
    <View style={[styles.footerContainer, { borderTopColor: palette.border }]}>
      <Text style={[dynamicStyles.textSecondary, dynamicStyles.textSm]}>
        © {new Date().getFullYear()} [Seu Nome]. Construído com React Native, Expo e TypeScript.
      </Text>
      <View style={styles.socialLinks}>
        <Text style={[dynamicStyles.accentColor, dynamicStyles.textSm, { marginHorizontal: 8 }]}>GitHub</Text>
        <Text style={[dynamicStyles.accentColor, dynamicStyles.textSm, { marginHorizontal: 8 }]}>LinkedIn</Text>
      </View>
    </View>
  );
};


// --- Componente Principal (App) ---
// O componente principal deve ser o export default para que o Expo/RN Web o renderize
export default function App() {
  const { dynamicStyles } = useThemeColors();

  return (
    <View style={dynamicStyles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Header />
        <AvatarSection />
        <PortfolioCards />
        <Footer />
      </ScrollView>
    </View>
  );
}

// --- Estilos Fixos (Layout, Borda, Tamanhos) ---
const styles = StyleSheet.create({
  // Estilo para o conteúdo do ScrollView (garante que tudo fique centrado)
  scrollViewContent: {
    alignItems: 'center',
    paddingBottom: 40,
  },
  
  // Header
  headerContainer: {
    width: '100%',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    height: 60,
  },
  headerTitle: {
    fontWeight: '900',
  },
  
  // Avatar
  avatarSection: {
    alignItems: 'center',
  },
  avatarImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#cbd5e1', // slate-300 placeholder
  },

  // Cards
  cardList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 16, // Espaçamento entre os cards (RN não tem 'gap' diretamente, mas funciona no RN Web)
  },
  card: {
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    width: 300, // Largura fixa para mobile/tablet. Pode ser ajustado com lógica de layout responsivo.
    minHeight: 180,
    justifyContent: 'space-between',
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
  },
  tag: {
    marginRight: 8,
    marginTop: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    backgroundColor: 'rgba(100, 116, 139, 0.1)', // slate-500 com 10% de opacidade
  },

  // Footer
  footerContainer: {
    width: '100%',
    padding: 24,
    marginTop: 40,
    alignItems: 'center',
    borderTopWidth: 1,
  },
  socialLinks: {
    flexDirection: 'row',
    marginTop: 10,
  }
});