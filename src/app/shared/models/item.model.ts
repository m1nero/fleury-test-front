export class Item {

  constructor(
    public ID_UNID_CD_UNIDADE_FICHA?: number,
    public ID_FICH_NR_FICHA?: number,
    public ID_ITEM_NR_ITEM?: number,
    public ID_ITEM_NR_SUBITEM?: number,
    public PROD_SL_EXAME?: string,
    public UNID_NO_UNIDADE?: string,
    public FICH_DH_ABERTURA?: Date,
    public PEFI_NO_NOME?: string,
    public PEFI_NO_SOBRENOME?: string,
    public PEFI_DH_NASCIMENTO?: Date,
  ) { }
}
