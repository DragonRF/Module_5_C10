import {styles} from "next/dist/client/components/react-dev-overlay/internal/components/Toast";
import {getStudents} from "@/pages/mock-data/data";
import Link from "next/link";

export default function Home() {
  return (
      <div className={styles.container}>
        <main className={styles.main}>
          <table className={styles.table}>
            <thead>
            <tr className={styles.tr}>
              <th className={styles.th}>ID</th>
              <th className={styles.th}>Name</th>
              <th className={styles.th}>Action</th>
            </tr>
            </thead>
            <tbody>
            {getStudents().map(student => (
                <tr className={styles.tr} key={student.id}>
                  <td className={styles.td}>{student.id}</td>
                  <td className={styles.td}>{student.name}</td>
                  <td className={styles.td}>
                    <Link href={`/student/${encodeURIComponent(student.name)}`}>
                      <p>Show</p>
                    </Link>
                  </td>
                </tr>
            ))}
            </tbody>
          </table>
        </main>
      </div>
  );
}