export default function Quote() {
  return (
    <div className="bg-slate-200 h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col  max-w-lg gap-3">
        <div className="  text-3xl font-bold ">
          "The customer service is recieved was exceptional. The support team
          went above and beyond to address my concerns."
        </div>
        <div>
          <div className="text-xl font-bold">Julies Winfield</div>
          <span className=" text-slate-500 font-light">CEO, Acme Inc</span>
        </div>
      </div>
    </div>
  );
}
