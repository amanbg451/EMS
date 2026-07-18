export default function SurveyDashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
        Survey Dashboard
      </h1>
      <p className="text-slate-600 dark:text-slate-400 mt-2">
        Welcome to the Survey Management Dashboard
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
          <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Surveys</h3>
          <p className="text-2xl font-bold text-slate-900 dark:text-white mt-2">0</p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
          <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Responses</h3>
          <p className="text-2xl font-bold text-slate-900 dark:text-white mt-2">0</p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
          <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">Active Projects</h3>
          <p className="text-2xl font-bold text-slate-900 dark:text-white mt-2">0</p>
        </div>
      </div>
    </div>
  );
}