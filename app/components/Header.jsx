export function Header() {
  return (
    <div className="flex justify-between absolute top-[30px] w-[90vw]">
      <div className="flex flex-col leading-[1.2]">
        <p className="text-center text-[var(--primary-font-color)]">
          Designed by
        </p>
        <p className="text-[20px] font-semibold text-[var(--primary-font-color)]">
          WHOISPOWER
        </p>
      </div>
      <div className="flex gap-[10px]">
        <p className="text-[var(--primary-font-color)]">Lycoris recoil:</p>
        <p className="text-[var(--secondary-font-color)]">Ordinary day</p>
      </div>
    </div>
  );
}
