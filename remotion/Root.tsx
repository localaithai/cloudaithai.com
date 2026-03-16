import { Composition } from "remotion";
import CloudVideo from "./CloudVideo";
import HeroVideo from "./HeroVideo";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="CloudWorkflow"
        component={CloudVideo}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="HeroLoop"
        component={HeroVideo}
        durationInFrames={300}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
