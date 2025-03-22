import Sidebar from "../components/Sidebar";
import { PopularTokenCard, TradeCard } from "../components/TradeCards";

type Props = {};

function TradeDashboard({}: Props) {
  return (
    <div className="w-full p-2 gap-[24px] items-start bg-transparent flex flex-row h-auto">
      <Sidebar />
      <div className="w-full flex gap-[11px]">
        <div className="flex-1">
          <PopularTokenCard />
        </div>

        <div className="grid flex-1 grid-cols-2 gap-[11px] w-full">
          <TradeCard />
          <TradeCard />
          <TradeCard />
          <TradeCard />
        </div>
      </div>
    </div>
  );
}

export default TradeDashboard;
