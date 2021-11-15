import messageController from '../../../routes/api/message/message.controller';
import messageService from '../../../routes/api/message/message.service';
import STATUS from '../../../lib/util/statusCode';

describe('Message Controller Test', () => {
    const res = {
        status: jest.fn(() => res),
        json: jest.fn(),
    };
    const next = jest.fn();

    test('메시지 생성 성공 시, id 와 CREATED STATUS 응답', async () => {
        // given
        const expectedId = 1;
        messageService.create = jest.fn(() => expectedId);
        const req = {
            params: {
                id: 1,
            },
            body: {
                senderId: 1,
                content: 'hi',
            },
        };

        // when
        await messageController.createMessage(req, res, next);

        // then
        expect(res.status).toHaveBeenCalledWith(STATUS.CREATED);
        expect(res.json).toHaveBeenCalledWith(expectedId);
    });
});
