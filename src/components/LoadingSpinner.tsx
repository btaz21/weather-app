interface Props {
  text?: string;
  hidden?: boolean;
}

const LoadingSpinner = ({ text = 'Loading...', hidden = true }: Props) => {
  return (
    <div className="spinner-border" role="status">
      <span className={hidden ? `visually-hidden` : ''}>{text}</span>
    </div>
  );
};
export default LoadingSpinner;
