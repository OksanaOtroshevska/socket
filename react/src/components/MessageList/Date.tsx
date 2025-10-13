import "./Date.css";

interface DateBlockProps {
  date: string;
}


function DateBlock ({ date }: DateBlockProps) {
  return (
    <div className="date-block">{date}</div>
  )
}

export default DateBlock;