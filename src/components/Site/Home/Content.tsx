import React from "react";
import Icon from "@mdi/react";
import { mdiEmoticonDeadOutline } from "@mdi/js";

// TODO: read content from appwrite with a query and display it here
export default function Content() {
  return (
    <div
      id="home-content"
      className="w-full h-80 flex flex-row flex-3 text-white bg-menu-selected-bg"
    >
      <div
        id="contributions"
        className="w-full h-full flex flex-row items-start justify-start"
      >
        <div className="w-12 h-full text-xl text-slate-400 font-bold rotate-270 relative -top-6 left-34">
          Contributions
        </div>
        <div className="w-full">
          {/* {!contributions ? (
            <div className="h-79 flex flex-col items-center justify-center">
              <Image
                src="/tk/core/loading.gif"
                alt="Loading Contributions"
                width={30}
                height={30}
                loading="eager"
                unoptimized
                priority
              />
            </div>
          ) : contributions.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-79">
              <Icon path={mdiEmoticonDeadOutline} size={2} />
              <span>No contributions yet.</span>
            </div>
          ) : (
            contributions?.map((content: Contribution) => {
              switch (content.kind) {
                case "extension":
                  return (
                    <div key={content._id} className="text-white">
                      <div className="flex flex-row items-center justfy-center gap-2 text-xs">
                        <span className="text-slate-400">Extension &gt;</span>
                        {content.type}
                      </div>
                      <div>{content.name}</div>
                      <div>{content.description}</div>
                    </div>
                  );
                case "tutorial":
                  return (
                    <div key={content._id} className="text-white">
                      <div className="flex flex-row items-center justfy-center gap-2 text-xs">
                        <span className="text-slate-400">Tutorial &gt;</span>
                        {content.type}
                      </div>
                      <div>{content.title}</div>
                      <div>{content.description}</div>
                    </div>
                  );
                case "game":
                  return (
                    <div key={content._id} className="text-white">
                      <div className="flex flex-row items-center justfy-center gap-2 text-xs">
                        <span className="text-slate-400">Game &gt;</span>
                        {content.status}
                      </div>
                      <div>{content.title}</div>
                      <div>{content.description}</div>
                    </div>
                  );
              }
            })
          )} */}
        </div>
      </div>

      <div id="clear" className="border-l border-blurb-selected-bg"></div>

      <div
        id="poll"
        className="w-full h-full flex flex-row items-start justify-start"
      >
        <div className="w-12 h-full text-xl text-slate-400 font-bold rotate-270 relative -top-12 left-34">
          Community
        </div>
        {/* // TODO: */}
        <div className="w-full">content</div>
      </div>

      <div id="clear" className="border-l border-blurb-selected-bg"></div>

      <div
        id="activity"
        className="w-full h-full flex flex-row items-start justify-between"
      >
        <div className="w-12 h-full text-xl text-slate-400 font-bold rotate-270 relative -top-22 left-34">
          Activity
        </div>
        {/* // TODO: */}
        <div className="w-full">content</div>
      </div>
    </div>
  );
}
