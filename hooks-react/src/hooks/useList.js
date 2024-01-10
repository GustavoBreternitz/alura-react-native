import { useEffect, useState } from "react";
import shops from '../service/shops';

export default function useList() {
    const [list, setList] = useState([]);

    // por padrão o array vazio no useEffect faz com que o hook seja executado apeans uma vez
    useEffect(() => {
      const owners = shops();
      setList(owners.list)
    }, [])

    return list;
}