import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors"

export const styles = StyleSheet.create({
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
  },
});