import type { FC } from "react";

// import IconFb from "@src/assets/images/IconFb.svg";
import IconGit from "@src/assets/images/IconGit.svg";
import IconLinkIn from "@src/assets/images/IconLinkIn.svg";
import SocialItem from "@src/components/atoms/SocialItem";

interface Props {
  className?: string;
}

const SocialGroup: FC<Props> = () => {
  return (
    <div className="mt-4 flex items-center gap-4">
      {/* <SocialItem icon={<IconFb className="[&>path]:fill-white" />} /> */}
      <SocialItem
        icon={<IconGit className="[&>path]:fill-white" />}
        href="https://github.com/huynhgiao1012?tab=repositories"
      />
      <SocialItem
        icon={<IconLinkIn className="[&>path]:fill-white" />}
        href="https://www.linkedin.com/in/hu%E1%BB%B3nh-giao-undefined-473a0a240/"
      />
    </div>
  );
};

export default SocialGroup;
