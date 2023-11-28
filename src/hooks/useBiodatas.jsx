import { useEffect, useState } from "react";

const useBiodatas = () => {

    const [biodatasPage, setBiodatasPage] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/biodatas')
            .then(res => res.json())
            .then(data => {
                setBiodatasPage(data);
                setLoading(false);
            });
    }, [])
    return [biodatasPage, loading]

}

export default useBiodatas;