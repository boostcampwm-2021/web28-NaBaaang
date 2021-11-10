import channelController from '../../../routes/api/channel/channel.controller';
import channelService from '../../../routes/api/channel/channel.service';
import STATUS from '../../../lib/util/statusCode';

describe('Channel Controller Test', () => {
    const res = {
        status: jest.fn(() => res),
        json: jest.fn(),
    };
    const next = jest.fn();

    test('방송 생성 성공 시, id 와 CREATED STATUS 응답', async () => {
        // given
        const expectedId = 1;
        channelService.create = jest.fn(() => expectedId);
        const req = {
            body: {
                title: 'this is title',
                description: 'this is description',
                category: 'game',
            },
        };

        // when
        await channelController.createChannel(req, res, next);

        // then
        expect(channelService.create).toHaveBeenCalledWith(req.body);
        expect(res.status).toHaveBeenCalledWith(STATUS.CREATED);
        expect(res.json).toHaveBeenCalledWith(expectedId);
    });

    test('방송 생성 실패 시, 에러 메시지 와 INTERNAL_SERVER_ERROR STATUS 응답', async () => {
        // given
        const errorMessage = 'Invalid Channel Info';
        channelService.create = jest.fn(() => {
            throw new Error(errorMessage);
        });
        const req = {
            body: {
                title: 'this is title',
                description: 'this is description',
                category: 'game',
            },
        };

        // when
        await channelController.createChannel(req, res, next);

        // then
        expect(channelService.create).toHaveBeenCalledWith(req.body);
        expect(res.status).toHaveBeenCalledWith(STATUS.INTERNAL_SERVER_ERROR);
        expect(res.json).toHaveBeenCalledWith(errorMessage);
    });

    test('방송 조회 성공 시, 해당 channel 정보와 OK STATUS 응답', async () => {
        // given
        const expected = {
            id: 1,
            title: 'this is title',
            description: 'this is description',
            category: 'game',
            streamer_id: null,
            stream_key: '7481d507-f19d-40cd-8014-aa8f9791a41d',
        };
        channelService.getChannelById = jest.fn(() => {
            return expected;
        });
        const req = {
            params: {
                id: 1,
            },
        };

        // when
        await channelController.getChannel(req, res, next);

        // then
        expect(channelService.getChannelById).toHaveBeenCalledWith(
            req.params.id,
        );
        expect(res.status).toHaveBeenCalledWith(STATUS.OK);
        expect(res.json).toHaveBeenCalledWith(expected);
    });
});
