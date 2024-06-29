export default function PanelAbout() {
  return (
    <div className=":uno: rounded-lg bg-white p-6 shadow-md space-y-4">
      <h2 className=":uno: mb-4 text-2xl text-gray-800 font-semibold">关于</h2>
      <p className=":uno: text-lg text-gray-700">让网页更智能</p>
      <p className=":uno: text-sm text-gray-600">
        作者：
        <a
          href="http://github.com/2214962083"
          target="_blank"
          rel="noreferrer"
          className=":uno: text-blue-600 underline transition-colors duration-200 hover:text-blue-800"
        >
          @葬爱非主流小明
        </a>
      </p>
      <div className=":uno: mt-6 border-t border-gray-200 pt-4">
        <p className=":uno: text-xs text-gray-500">
          © 2024 All rights reserved
        </p>
      </div>
    </div>
  )
}
