
export const interpolation=(x, xmin, xmax, ymin, ymax) =>{
    return (ymax-ymin)*(x-xmin)/(xmax-xmin)+ymin
}