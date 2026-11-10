// Common card base classes for consistent styling across components
// Order: positioning, sizing, styling, text color, text hover, background, background hover, border, border hover, blur, animations
export const CARD_BASE_CLASSES =
  "relative flex flex-col h-full rounded-2xl p-8 bg-gray-300/40 dark:bg-black/30 hover:bg-slate-400/40 dark:hover:bg-slate-600/40 active:bg-slate-400/40 dark:active:bg-slate-600/40 border border-gray-400/20 dark:border-gray-200/20 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] active:scale-[1.02] hover:shadow-lg active:shadow-lg cursor-pointer";

export const TECH_CARD_CLASSES =
  "group flex flex-col items-center justify-center m-1 min-w-[100px] md:min-w-[120px] p-4 md:p-6 rounded-2xl bg-gray-300/40 dark:bg-black/30 hover:bg-slate-400/40 dark:hover:bg-slate-600/40 active:bg-slate-400/40 dark:active:bg-slate-600/40 border border-gray-400/20 dark:border-gray-200/20 backdrop-blur-sm transition-all duration-300 ease-out hover:scale-105 active:scale-105 cursor-pointer";

export const TECH_ICON_CLASSES =
  "h-8 w-8 md:h-10 md:w-10 mb-2 md:mb-3 transition-transform duration-300 group-hover:scale-110 group-active:scale-110";

export const TECH_TEXT_CLASSES =
  "text-xs md:text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-gray-200 group-active:text-gray-700 dark:group-active:text-gray-200 transition-colors duration-300 select-none";

export const STAT_CARD_CLASSES =
  "mx-auto md:mx-0 max-w-sm md:max-w-none px-12 py-6 md:px-6 text-center flex flex-col items-center justify-center rounded-2xl bg-gray-300/40 dark:bg-black/30 hover:bg-slate-400/40 dark:hover:bg-slate-600/40 active:bg-slate-400/40 dark:active:bg-slate-600/40 border border-gray-400/20 dark:border-gray-200/20 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] active:scale-[1.02] hover:shadow-lg active:shadow-lg cursor-pointer";

export const VIDEO_CONTAINER_CLASSES =
  "relative aspect-video mb-4 bg-gray-800 rounded-xl overflow-hidden";

export const BUTTON_BASE_CLASSES =
  "inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-lg shadow-md hover:shadow-lg active:shadow-lg transition-all duration-300";
