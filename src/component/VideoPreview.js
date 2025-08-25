

function VideoPreview(props) {
    const title = props.title;
    const ChannelName = props.ChannelName;
    const views = props.views;
    const uploadtime = props.uploadtime;
    const thumbnail1 = props.thumbnail1;
    const channellogo = props.channellogo;
    return (
        <div   className="c1">
        <div  className="Thumbnail">
            <img  className="profilepic" src={thumbnail1}></img>
        </div>
        <div  className="titlebar">
            <div  className="logo">
                <img  className="profilepic1" src={channellogo}></img>
            </div>
            <div  className="VideoTitle">{title}</div>
        </div>
        <div  className="ChannelName">{ChannelName}</div>
        <div  className="views">{views} views  .  {uploadtime}</div>
    </div>
    )
}

export default VideoPreview