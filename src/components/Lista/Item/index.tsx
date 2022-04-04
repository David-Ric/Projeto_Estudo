import { ITarefa } from "../../../types/tarefa";
import style from "./Item.module.scss";

interface props extends ITarefa {
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

export default function Item({
  tarefa,
  tempo,
  selecionado,
  completado,
  id,
  selecionaTarefa,
}: props) {
  return (
    <li
      className={`${style.item} ${selecionado ? style.itemSelecionado : ""} ${
        completado ? style.itemCompletado : ""
      }`} /*ternario */
      onClick={() =>
        !completado && selecionaTarefa({
          tarefa,
          tempo,
          selecionado,
          completado,
          id,
        })
      }
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
      {completado && (
        <span className={style.concluido} area-Label="tarefa completada"></span>
      )}
    </li>
  );
}
