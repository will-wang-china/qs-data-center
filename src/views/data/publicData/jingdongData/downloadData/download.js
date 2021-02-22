import axios from 'axios'
export function exportData() {
    axios({
            method: "post",
            url: "http://sfddata.tech:8281/jingdong/import",
            responseType: "blob"
        })
        .then(res => {
            const link = document.createElement("a");
            let blob = new Blob([res.data], { type: "multipary/form-data" });
            link.style.display = "none";
            link.href = URL.createObjectURL(blob);
            link.setAttribute("download", decodeURI(Date.now() + ' - 京东数据.xlsx'));
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })
}