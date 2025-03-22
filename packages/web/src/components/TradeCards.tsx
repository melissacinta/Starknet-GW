type Props = {};

export const TradeCard = () => {
  return (
    <div className="w-full h-[153px] bg-white rounded-[16px] border-[1px] border-[#DEDEDE] p-[24px]">
      <div className="flex flex-row items-center gap-[12px] w-auto">
        <img src="/dashboardIcons/Profile.svg" className="h-auto w-auto" />
        <div className="flex-col flex gap-[2px] w-auto">
          <p className="font-normal text-sm text-center text-[#1E1E1E] capitalize">
            Pudgy penguins
          </p>
          <p className="font-normal text-sm text-[#9DA3AC] uppercase">PENGU</p>
        </div>
      </div>
    </div>
  );
};

export const PopularTokenCard = () => {
  return (
    <div className="w-full h-[153px] bg-white rounded-[16px] border-[1px] border-[#DEDEDE] p-[24px]">
      <div className="flex flex-row items-center gap-[12px] w-auto">
        <img src="/dashboardIcons/Profile.svg" className="h-auto w-auto" />
        <div className="flex-col flex gap-[2px] w-auto">
          <p className="font-normal text-sm text-center text-[#1E1E1E] capitalize">
            Ether
          </p>
          <p className="font-normal text-sm text-[#9DA3AC] uppercase">Eth</p>
        </div>
      </div>
    </div>
  );
};
