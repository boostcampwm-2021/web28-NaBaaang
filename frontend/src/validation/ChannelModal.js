export default function validateChannelForm({ title, category, description }) {
    const errors = {};

    if (!title) {
        errors.title = '방송 제목을 입력해주세요.';
    }

    if (!category) {
        errors.category = '방송 카테고리를 입력해주세요. ';
    }

    if (!description) {
        errors.description = '방송 설명을 입력해주세요.';
    }

    return errors;
}
