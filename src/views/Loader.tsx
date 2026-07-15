interface FullPageLoaderProps {
  message?: string;
}

export default function Loader({ message }: FullPageLoaderProps) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm animate-fade-in">
      <div className="relative flex items-center justify-center">
        {/* Outer rotating ring */}
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-purple-200 border-t-purple-600"></div>
        {/* Inner static/pulsing core */}
        <div className="absolute h-8 w-8 animate-pulse rounded-full bg-purple-500/20"></div>
      </div>
      {message && (
        <p className="mt-4 text-sm font-medium text-slate-600 dark:text-slate-300 animate-pulse">
          {message}
        </p>
      )}
    </div>
  );
}
