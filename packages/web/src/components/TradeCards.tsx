type Props = {};

export const TradeCard = () => {
  return (
    <div className="w-full h-auto bg-white rounded-[16px] border-[1px] justify-between space-y-[32px] border-[#DEDEDE] p-[24px]">
      <div className="flex flex-row items-center gap-[12px] w-auto">
        <img src="/dashboardIcons/Profile.svg" className="h-auto w-auto" />
        <div className="flex-col flex gap-[2px] w-auto">
          <p className="font-normal text-sm text-center text-[#1E1E1E] capitalize">
            Pudgy penguins
          </p>
          <p className="font-normal text-sm text-[#9DA3AC] uppercase">PENGU</p>
        </div>
      </div>

      <div>
        <p className="text-[12px] text-[#1E1E1E]">$0.0084</p>
        <div className="w-full items-start flex flex-row justify-between">
          <div className="px-[12px] py-[4px] border-[#59FFCA] border-[1px] text-[#59FFCA] text-[12px] rounded-[48px]">
            +4.774%
          </div>
          <div className="px-[12px] py-[4px] flex items-center gap-2 shadow-lg shadow-[#9DA3AC] text-[12px] rounded-[48px]">
            <img src="/dashboardIcons/expand.svg" className="w-auto h-auto" />
            Expand
          </div>
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
