import channelService from '../../../routes/api/channel/channel.service';
import channelDao from '../../../routes/api/channel/channel.dao';

describe('Channel Service Test', () => {
    test('방송 생성', async () => {
        // given
        const expected = 1;
        channelDao.insertChannel = jest.fn(() => expected);
        const channelInfo = {
            title: 'this is title',
            description: 'this is description',
            category: 'game',
        };

        // when
        const result = await channelService.create(channelInfo);

        // then
        expect(channelDao.insertChannel).toHaveBeenCalledWith(
            channelInfo,
            expect.any(Object),
        );
        expect(result).toBe(expected);
    });

    test('방송 조회', async () => {
        // given
        const expected = {
            id: 1,
            title: '제목 블라블라',
            category: '게임',
            description: '설명 블라블라~~~~',
            streamer_id: null,
            stream_key: '7481d507-f19d-40cd-8014-aa8f9791a41d',
        };
        channelDao.findByChannelId = jest.fn(() => expected);
        const channelId = 1;

        // when
        const result = await channelService.getChannelById(channelId);

        // then
        expect(channelDao.findByChannelId).toHaveBeenCalledWith(
            channelId,
            expect.any(Object),
        );
        expect(result).toBe(expected);
    });
});
