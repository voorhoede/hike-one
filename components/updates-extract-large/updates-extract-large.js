import React from 'react'
import UpdateExtractLarge from "../update-extract-large/update-extract-large";
import MustRead from "../must-read/must-read";

const UpdatesExtractLarge = ({highlights, mustRead, index}) => {
  return (
    <div className="updates-highlights">
      <div className="updates-extract-large">
        {highlights.map((item, index) => (
        <UpdateExtractLarge
          key={index}
          index={index}
          title={item.title}
          date={item.createdAt}
          image={item.image.url}
          color={item.themeColor.hex}
          category={item.category.name}
          authors={item.authors}
          target={item.link}
          external={item.isExternalLink}/>
        ))}
      </div>
      <MustRead mustRead={mustRead} />
    </div>
  );
};

export default UpdatesExtractLarge;
