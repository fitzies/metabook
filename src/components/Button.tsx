const Button = (props: { text: string; type: "solid"; onClick: Function }) => {
  return (
    <div
      className="px-3 py-2 h-1/2 bg-alt rounded-xl flex justify-center items-center hover:bg-green-400 cursor-pointer hover:text-black duration-150"
      onClick={() => props.onClick()}
    >
      {props.text}
    </div>
  );
};

export default Button;
