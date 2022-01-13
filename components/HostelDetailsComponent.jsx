import Link from 'next/link'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const HostelDetailsComponent = ({ detail }) => {
  return (
    <Link href={`/myHostel/${detail.name}`}>
      <a className={`flex flex-col gap-y-8 rounded-lg p-4 w-full sm:w-[48%] lg:w-w-3/10 ${detail.occupants < 600 ? 'bg-[#FEF6E2]' : `${detail.occupants > 1000 ? 'bg-primary-Lightest':'bg-[#D9F0FF]' }` }`}>
        <div className="flex justify-between items-center">
          <h5>{detail.name}</h5>
          <h5 className="text-primary-Default">{detail.percent}</h5>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <h2>{detail.occupants}</h2>
            <p className="body1 text-Neutral-gray">Occupants</p>
          </div>
          <div className="w-16 h-16">
            <CircularProgressbar
              value={detail.occupantsPercent}
              text={`${detail.occupantsPercent}%`}
            />
          </div>
        </div>
      </a>
    </Link>
  )
}

export default HostelDetailsComponent
