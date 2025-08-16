import { Header } from "./components/Header";

export default function LandingPage() {
  return (
    <div className="p-[50px] w-[100vw] h-[100vh] flex flex-row">
      <Header />
      <div className="first_half">
        <div className="title_part">
          <p className="text-[var(--primary-font-color)]">Chisato and</p>
          <p className="text-[var(--primary-font-color)]">Takina</p>
          <div className="Head_text">
            <div className="flex">
              <h1>Lyco</h1>
              <h1 className="font-medium!">ris</h1>
            </div>
            <div className="flex">
              <h1>Reco</h1>
              <h1 className="font-medium!">il</h1>
            </div>
            <div>
              <p className="text-[var(--primary-font-color)] font-bold text-[18px]">
                Lyco
              </p>
              <p className="text-[var(--primary-font-color)] font-bold text-[18px]">
                Reco.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-[30px] font-semibold text-[var(--secondary-font-color)]">
          <p>#cafe</p>
          <p>#action</p>
          <p>#comedy</p>
        </div>
        <div className="flex flex-col gap-[20px]">
          <article className="w-[500px] ml-[-70px] text-[var(--secondary-font-color)]">
            <p>
              Chisato Nishikigi is the main protagonist of the original anime
              series, Lycoris Recoil. She works at Café LycoReco, along with her
              partner Takina Inoue.
            </p>
          </article>
          <article className="w-[700px] ml-[100px] text-[var(--secondary-font-color)]">
            <p>
              Takina Inoue is one of the main characters the original anime
              series, Lycoris Recoil. She was previously the partner of Fuki
              Harukawa, but due to disobeying orders on a mission, she was
              transferred to Café LycoReco, where she is now partnered with
              Chisato Nishikigi.
            </p>
          </article>
        </div>
      </div>
      <div className="second_half">
        <img src="bg.png"></img>
      </div>
    </div>
  );
}
