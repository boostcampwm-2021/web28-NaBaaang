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
        'test',
        'description...',
        1,
        '1asdqw1',
        true,
    );
};

const insertUserDummy = async (db, profileId, nickname, imageUrl) => {
    await db.user.create({
        profileId,
        nickname,
        imageUrl,
    });
};

const insertChannelDummy = async (
    db,
    title,
    category,
    description,
    streamerId,
    streamKey,
    isLive,
) => {
    const { id: channelId } = await db.channel.create({
        title,
        category,
        description,
        streamerId,
        streamKey,
        isLive,
    });
    await db.chat.create({
        channelId,
    });
};

export { insertDummy };
