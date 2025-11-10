import { Image } from "antd"

interface IntelImageProps {
  src?: string
}

export const IntelImage = ({ src }: IntelImageProps) => (
  <div className="intl-details-image relative">
    <div className="absolute top-[30px] left-0 bg-[linear-gradient(135deg,#ff6b35_0%,#f7931e_100%)] px-5 pe-3 py-[5px] rounded-[4px_10px_10px_4px] z-10">
      <span className="text-white font-bold border-e-3 pe-2">AI Insights</span>
    </div>

    <Image
      src={
        src ||
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop"
      }
      alt="intl image"
      preview={false}
      className="object-cover rounded-xl"
    />
  </div>
)
