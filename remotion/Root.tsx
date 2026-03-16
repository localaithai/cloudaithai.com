import { Composition } from "remotion";
import CloudVideo from "./CloudVideo";

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
    </>
  );
};
