import { useEffect, useState } from "react";

const useBiodatas = () => {

    const [biodatasPage, setBiodatasPage] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://ghotok-online-server.vercel.app/biodatas')
            .then(res => res.json())
            .then(data => {
                setBiodatasPage(data);
                setLoading(false);
            });
    }, [])
    return [biodatasPage, loading]

}

export default useBiodatas;