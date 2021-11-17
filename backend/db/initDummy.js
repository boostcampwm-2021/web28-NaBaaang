const insertDummy = async db => {
    await insertUserDummy(
        db,
        '111111111',
        'test',
        'https://lh3.googleusercontent.com/a/AATXAJx8G_3hTwJUKgnMGM2mO8wS1-v3lM97vqEc_7UyUA=s96-c',
    );
    await insertChannelDummy(
        db,
        'test title',
        'description...',
        1,
        '1asdqw1',
        true,
    );
};

const insertUserDummy = async (db, profileId, nickname, imageUrl) => {
    await db.user.create({
        profile_id: profileId,
        nickname: nickname,
        image_url: imageUrl,
    });
};

const insertChannelDummy = async (
    db,
    title,
    description,
    streamer_id,
    stream_key,
    isLive,
) => {
    const { id: channelId } = await db.channel.create({
        title,
        description,
        streamer_id,
        stream_key,
        isLive,
    });
    await db.chat.create({
        channel_id: channelId,
    });
};

export { insertDummy };
