import channelDao from '@/routes/api/channel/channel.dao';
import db from '@/models';
describe('Channel DAO Test', () => {
    beforeAll(async () => {
        await db.init();
    });

    test('방송 생성 및 조회', async () => {
        // given
        const channelInfo = {
            title: '제목 블라블라',
            chat: null,
            category: '게임',
            description: '설명 블라블라~~~~',
            streamerId: null,
            streamer: null,
            streamKey: '7481d507-f19d-40cd-8014-aa8f9791a41d',
            isLive: false,
            isDelete: false,
        };

        // when
        const savedId = await channelDao.insertChannel(channelInfo);
        let savedChannel = await channelDao.findByChannelId(savedId);
        // get Sequelize dataValues
        savedChannel = savedChannel.get({ plain: true });
        channelInfo.id = savedId;

        // then
        expect(savedChannel).toEqual(channelInfo);
    });
});
