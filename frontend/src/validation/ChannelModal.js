export default function ChannelCreateValidation({
    title,
    category,
    description,
}) {
    const errors = {};

    if (!title) {
        errors.title = '방송 제목이 생성되지 않았습니다.';
    }

    if (!category) {
        errors.title = '방송 카테고리가 생성되지 않았습니다.';
    }

    if (!description) {
        errors.title = '방송 설명이 생성되지 않았습니다.';
    }

    return errors;
}
