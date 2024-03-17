from flask import Flask, request, jsonify
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from pymongo import MongoClient

app = Flask(__name__)

client = MongoClient("mongodb+srv://parasmunoli:cVuxfhlMPuCRau7u@cluster0.segtuxl.mongodb.net/")
db = client["data"]

def extract_skills(text):
    vectorizer = TfidfVectorizer(lowercase=True, stop_words="english")
    tfidf_matrix = vectorizer.fit_transform([text])
    feature_names = vectorizer.get_feature_names_out()
    skills = [word for word in feature_names if len(word) > 2 and tfidf_matrix[0, vectorizer.vocabulary_[word]] > 0.1]
    return " ".join(skills)


def fetch_user_skills(user_id):
    user = db.user.find_one({"_id": user_id})
    if user:
        user_profile = user.get("about", "")
        return extract_skills(user_profile)
    else:
        return "Failed to extract user Profile"

def fetch_job_description(job_id):
    job = db.job.find_one({"_id": job_id})
    if job:
        job_description = job.get("desc", "")
        return extract_skills(job_description)
    else:
        return "Failed to Extract Job Description"

@app.route('/cosine_similarity', methods=['POST'])
def cosine_similarity_api():
    data = request.get_json()
    user_id = data.get('user_id')
    job_id = data.get('job_id')

    if not user_id or not job_id:
        return jsonify({"error": "User ID or Job ID is missing"}), 400

    user_skills = fetch_user_skills(user_id)
    job_skills = fetch_job_description(job_id)

    if user_skills and job_skills:
        vectorizer = TfidfVectorizer()
        X = vectorizer.fit_transform([job_skills, user_skills])
        cosine_sim = cosine_similarity(X[0:1], X[1:]).flatten()[0]
        return jsonify({"user_id": user_id, "job_id": job_id, "cosine_similarity": cosine_sim}), 200
    else:
        return jsonify({"error": "User skills or job description not found"}), 404

if __name__ == '__main__':
    app.run(debug=True)