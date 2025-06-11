import TextPressure from '@/components/TextPressure';

export default function NotFound() {
    return (
      <div id="not-found" className='h-full flex items-center justify-center bg-gray-50'>
      <TextPressure
        text="404"
        flex={true}
        alpha={false}
        stroke={false}
        width={true}
        weight={true}
        italic={true}
        textColor="#000000"
        strokeColor="#asfafa"
        minFontSize={36}
      />
    </div>
    )
  }
  