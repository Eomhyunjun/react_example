import dummy from "../db/data.json"

export default function Day() {
    //  dummy.words
    const day = 2;
    const wordList = dummy.words.filter(word => word.day === day)

    return (
        <>
            <table>
                <tbody>
                    {wordList.map(word => (

                        <tr key={word.id}>
                            <td>{word.eng}</td>
                            <td>{word.kor}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}