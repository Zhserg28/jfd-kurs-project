export function displayDate(created_at) {
    const diffDate = Date.now() - created_at;
    if (diffDate / 1000 <= 60) {
        return "1 минуту назад";
    } else {
        if (diffDate / 1000 > 60 && diffDate / 1000 <= 300) {
            return "5 минут назад";
        } else {
            if (diffDate / 1000 > 300 && diffDate / 1000 <= 600) {
                return "10 минут назад";
            } else {
                if (diffDate / 1000 > 600 && diffDate / 1000 <= 1800) {
                    return "30 минут назад";
                } else {
                    if (
                        diffDate / 1000 / 60 > 60 &&
                        diffDate / 1000 / 60 / 60 <= 24
                    ) {
                        return `${diffDate.getHours()}.${diffDate.getMinutes()}`;
                    } else {
                        if (
                            diffDate / 1000 / 60 / 60 > 24 &&
                            diffDate / 1000 / 60 / 60 / 24 <= 31
                        ) {
                            return `${diffDate.getDate()}.${diffDate.getMonth()}`;
                        } else {
                            if (diffDate / 1000 / 60 / 60 / 24 > 31) {
                                return `${diffDate.getDate()}.${diffDate.getMonth()}.${diffDate.getFullYear()}`;
                            }
                        }
                    }
                }
            }
        }
    }
}
