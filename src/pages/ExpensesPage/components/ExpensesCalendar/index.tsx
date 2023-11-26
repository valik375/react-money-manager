import { FC } from 'react'
import { Link } from 'react-router-dom'
import { APP_ROUTES } from 'src/constants/routerHelper'
import { clsx } from 'clsx'
import moment from 'moment'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { v4 as uuidv4 } from 'uuid'

import './style.scss'

interface ExpensesCalendarProps {
  data: Array<any>
  year: number
  month: number
}

const ExpensesCalendar: FC<ExpensesCalendarProps> = ({ data, year, month }) => {
  const calendar = data
  if (!calendar.length) {
    const startDate = moment([year, month]).clone().startOf('week')
    const endDate = moment([year, month]).clone().endOf('month')
    const day = startDate.clone().subtract(1, 'day')

    while (day.isBefore(endDate, 'day')) {
      calendar.push(
        Array(7)
          .fill(0)
          .map(() => ({
            id: uuidv4(),
            day: day.add(1, 'day').clone().format('DD'),
            total: 0,
          })),
      )
    }
  }

  const isExtraDays = (weekIndex: number, day: string) => {
    if (weekIndex === 0 && +day > 10) {
      return true
    } else if (weekIndex === 5 && +day < 10) {
      return true
    } else return weekIndex === 4 && +day < 10
  }

  return (
    <div className="expenses-calendar">
      <div className="expenses-calendar__wrapper">
        <table className="expenses-calendar__table">
          <thead className="expenses-calendar__thead">
            <tr>
              <th className="expenses-calendar__thead-col">Sun</th>
              <th className="expenses-calendar__thead-col">Mon</th>
              <th className="expenses-calendar__thead-col">Tue</th>
              <th className="expenses-calendar__thead-col">Wed</th>
              <th className="expenses-calendar__thead-col">Thu</th>
              <th className="expenses-calendar__thead-col">Fri</th>
              <th className="expenses-calendar__thead-col">Sat</th>
            </tr>
          </thead>
          <tbody className="expenses-calendar__tbody">
            {calendar.map((week, weekIndex) => (
              <tr key={JSON.stringify(week)}>
                {week.map((day: any) => (
                  <td
                    className={clsx('expenses-calendar__tbody-col', {
                      extra: isExtraDays(weekIndex, day.day),
                    })}
                    key={day.id}
                  >
                    <Link
                      to={`${APP_ROUTES.expenses_path}/${year}-${month}/${day.day}`}
                      className="expenses-calendar__day"
                    >
                      <div className="expenses-calendar__current-day">{day.day}</div>
                      {day.total ? (
                        <div className="expenses-calendar__total">$ {day.total}</div>
                      ) : null}
                    </Link>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ExpensesCalendar
