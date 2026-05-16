'use client';

interface ComparisonTableProps {
  title?: string;
  description?: string;
  headers: string[];
  rows: (string | number)[][];
  highlightRow?: number;
  highlightCol?: number;
  footnotes?: string;
}

export default function ComparisonTable({
  title = "Comparison Table",
  description,
  headers,
  rows,
  highlightRow,
  highlightCol,
  footnotes
}: ComparisonTableProps) {
  return (
    <div className="my-8 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/50 not-prose">
      {/* Header */}
      {(title || description) && (
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4">
          {title && <h3 className="text-xl font-bold text-white">{title}</h3>}
          {description && (
            <p className="text-purple-100 text-sm mt-1">{description}</p>
          )}
        </div>
      )}

      {/* Table - Desktop */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <tr>
              {headers.map((header, idx) => (
                <th
                  key={idx}
                  className={`px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300
                    ${highlightCol === idx ? 'bg-purple-100 dark:bg-purple-900/30' : ''}`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            {rows.map((row, rowIdx) => (
              <tr
                key={rowIdx}
                className={`hover:bg-purple-50 dark:hover:bg-purple-950/20 transition-colors
                  ${highlightRow === rowIdx ? 'bg-purple-50 dark:bg-purple-950/20' : ''}`}
              >
                {row.map((cell, cellIdx) => (
                  <td
                    key={cellIdx}
                    className={`px-6 py-4 text-sm text-gray-600 dark:text-gray-400
                      ${cellIdx === 0 ? 'font-semibold text-gray-900 dark:text-white' : ''}
                      ${highlightCol === cellIdx ? 'font-semibold text-purple-600 dark:text-purple-400' : ''}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Note */}
      {footnotes && (
        <div className="bg-gray-50 dark:bg-gray-800/50 px-6 py-3 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs text-gray-500 dark:text-gray-400">{footnotes}</p>
        </div>
      )}
    </div>
  );
}