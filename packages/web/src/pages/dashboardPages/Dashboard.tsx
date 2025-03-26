import { SvgIcons } from '@/assets/SvgIcons';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const DashboardPage = () => {
  return (
    <section className="max-md:mt-16">
      <h1 className="text-2xl">Home Dashboard</h1>
      <div className="mt-10">
        <Card>
          <article className="flex md:justify-between gap-2 px-3 md:px-6 max-md:flex-col">
            <section className="text-lg flex flex-col gap-6 justify-between h-full">
              <div className="flex gap-4 items-center">
                <span>Total Balance</span>
                <span>{SvgIcons['eyeClosed']()}</span>
                <span>{SvgIcons['refresh']()}</span>
              </div>
              <div>
                <span className="text-[1.75rem] leading-normal">$0</span>
                <span className="flex gap-2 items-center text-grayish">
                  <span>+$0</span>
                  <span className="rounded-full h-[1.375rem] border border-[#59FFCA] text-[#59FFCA] px-3 py-1 flex justify-center items-center">
                    +0%
                  </span>
                </span>
              </div>
            </section>
            <section className="rounded-xl p-4 bg-gray-green dark:bg-transparent flex flex-col gap-6">
              <h2>Actions</h2>
              <div className="md:flex items-center gap-3 mt-auto flex-1 max-md:grid grid-cols-2">
                <Button className="px-12 py-3 text-sm font-medium">
                  <span>{SvgIcons['fund']()}</span>
                  <span>Fund</span>
                </Button>
                <Button
                  variant={'outline'}
                  className="px-12 py-3 text-sm font-medium text-grayish bg-transparent dark:bg-[#314140]"
                >
                  <span>{SvgIcons['arrow-right']()}</span>
                  <span>Send</span>
                </Button>
                <Button
                  variant={'outline'}
                  className="px-12 py-3 text-sm font-medium text-grayish bg-transparent dark:bg-[#314140]"
                >
                  <span>{SvgIcons['expand']()}</span>
                  <span>Expand</span>
                </Button>
              </div>
            </section>
          </article>
        </Card>
      </div>
    </section>
  );
};

export default DashboardPage;
