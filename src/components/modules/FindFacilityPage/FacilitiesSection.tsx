import { Facility } from '@/utils/types'

interface FacilitiesSectionProps {
  facilities: Facility[]
}

const FacilitiesSection: React.FC<FacilitiesSectionProps> = ({
  facilities
}) => {
  return (
    <div>
      FacilitiesSection
    </div>
  )
}

export default FacilitiesSection