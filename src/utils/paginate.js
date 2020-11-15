import _ from "lodash";

export const paginate=(courses,currentpage,perpage)=>{
    const startindex=(currentpage-1)*perpage;
    return _(courses).slice(startindex).take(perpage).value();
}