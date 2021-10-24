import React from "react";
import "./index.css";
export default function Github() {
  return (
    <div className="page">
      <h2>Github Kullanımı</h2>
      <br />
      <h2>kod göndermek için</h2>
      <p>ödev dosyasına sağ click yapıp gitbash ile aça bas</p>
      <p>daha sonra</p>
      <code>
        git add . <p>'enter a bas'</p>
      </code>
      <code>
        git commit -m "yaptığın değşikliği basitçe yaz" <p>'enter a bas'</p>
      </code>
      <code>
        git push origin main <p>'enter a bas'</p>
      </code>
      <p>
        bu işlemden sonra projedeki değişiklikler github yüklenmiş olucak :)
      </p>
      <br />

      <br />

      <h2>Güncel dosyaları indirmek için</h2>
      <p>ödev dosyasına sağ click yapıp gitbash ile aça bas</p>
      <code>
        git pull <p>'enter a bas'</p>
      </code>
      <p>yapman gereken bu kadar güncel kodlar inmiş olucak :)</p>
    </div>
  );
}
