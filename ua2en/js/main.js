
function transliterate() {
    let intext = document.getElementById('intext').value.trim();

    const exceptions = {
        'Київ': 'Kyiv',
        'Харків': 'Kharkiv',
        'Луганськ': 'Luhansk',
        'Запоріжжя': 'Zaporizhzhia',
        'Одеса': 'Odesa',
        'Ужгород': 'Uzhhorod',
        'Херсон': 'Kherson',
        'Чернігів': 'Chernihiv',
        'Житомир': 'Zhytomyr',
        'Полтава': 'Poltava',
        'Дніпро': 'Dnipro',
        'Донецьк': 'Donetsk',
        'київ': 'kyiv',
        'харків': 'kharkiv',
        'луганськ': 'luhansk',
        'запоріжжя': 'zaporizhzhia',
        'одеса': 'odesa',
        'ужгород': 'uzhhorod',
        'херсон': 'kherson',
        'чернігів': 'chernihiv',
        'житомир': 'zhytomyr',
        'полтава': 'poltava',
        'дніпро': 'dnipro',
        'донецьк': 'donetsk',
        'КИЇВ': 'KYIV',
        'ХАРКІВ': 'KHARKIV',
        'ЛУГАНСЬК': 'LUHANSK',
        'ЗАПОРІЖЖЯ': 'ZAPORIZHZHIA',
        'ОДЕСА': 'ODESA',
        'УЖГОРОД': 'UZHHOROD',
        'ХЕРСОН': 'KHERSON',
        'ЧЕРНІГІВ': 'CHERNIHIV',
        'ЖИТОМИР': 'ZHYTOMYR',
        'ПОЛТАВА': 'POLTAVA',
        'ДНІПРО': 'DNIPRO',
        'ДОНЕЦЬК': 'DONETSK'
    };

    if (exceptions[intext]) {
        document.getElementById('outtext').value = exceptions[intext];
        return;
    }
    const baseMap = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'h', 'ґ': 'g', 'д': 'd', 'е': 'e',
        'ж': 'zh', 'з': 'z', 'и': 'y', 'і': 'i', 'к': 'k', 'л': 'l', 'м': 'm',
        'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
        'ф': 'f', 'х': 'kh', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'shch',
        'ь': '', 'ъ': '', 'ы': 'y', 'ё': 'jo',
        'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'H', 'Ґ': 'G', 'Д': 'D', 'Е': 'E',
        'Ж': 'Zh', 'З': 'Z', 'И': 'Y', 'І': 'I', 'К': 'K', 'Л': 'L', 'М': 'M',
        'Н': 'N', 'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T', 'У': 'U',
        'Ф': 'F', 'Х': 'Kh', 'Ц': 'Ts', 'Ч': 'Ch', 'Ш': 'Sh', 'Щ': 'Shch',
        'Ь': '', 'Ъ': '', 'Ы': 'Y', 'Ё': 'Jo'
    };

    const specialMap = {
        'є': { start: 'ye', middle: 'ie' },
        'ї': { start: 'yi', middle: 'i' },
        'й': { start: 'y', middle: 'i' },
        'ю': { start: 'yu', middle: 'iu' },
        'я': { start: 'ya', middle: 'ia' },

        'Є': { start: 'Ye', middle: 'Ie' },
        'Ї': { start: 'Yi', middle: 'I' },
        'Й': { start: 'Y', middle: 'I' },
        'Ю': { start: 'Yu', middle: 'Iu' },
        'Я': { start: 'Ya', middle: 'Ia' }
    };

    const vowels = /[аеєиіїоуюяАЕЄИІЇОУЮЯ]/;
    const boundary = /[\s'’"-]/;

    let outtext = "";
    for (let i = 0; i < intext.length; i++) {
        let char = intext[i];

        if (specialMap[char]) {
            let prev = i === 0 ? "" : intext[i - 1];
            if (i === 0 || boundary.test(prev) || vowels.test(prev)) {
                outtext += specialMap[char].start;
            } else {
                outtext += specialMap[char].middle;
            }
        } else {
            outtext += baseMap[char] !== undefined ? baseMap[char] : char;
        }
    }
    document.getElementById('outtext').value = outtext;
}

document.addEventListener("DOMContentLoaded", function () {
    const outtext = document.getElementById("outtext");
    outtext.addEventListener("click", function () {
        if (!outtext.value.trim()) return;
        navigator.clipboard.writeText(outtext.value).then(() => {
            outtext.style.color = "green";
            setTimeout(() => { outtext.style.color = ""; }, 1000);
        }).catch(err => {
            console.error("Помилка копіювання:", err);
        });
    });
});
