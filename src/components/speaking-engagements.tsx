import React from "react";

const SpeakingEngagement: React.FC = () => {
  return (
    <div>
      <h2>登壇歴</h2>
      <table>
        <thead>
          <tr>
            <th>タイトル</th>
            <th>年月</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              【ITスキル×社会貢献】ソーシャル・テクノロジー・オフィサーとは何ぞや？会
              ＆NPO井戸端会議！
            </td>
            <td>2020/07</td>
          </tr>
          <tr>
            <td>Startup Lab Lagoon 文化祭</td>
            <td>2020/08</td>
          </tr>
          <tr>
            <td>
              【ITスキル×社会貢献】ソーシャル・テクノロジー・オフィサーとは何ぞや？オンライン座談会
            </td>
            <td>2020/10</td>
          </tr>
          <tr>
            <td>CivicTechForum2021</td>
            <td>2021/05</td>
          </tr>
          <tr>
            <td>千葉大学 NPO/NGO論 ゲスト講義</td>
            <td>2021/12</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SpeakingEngagement;
