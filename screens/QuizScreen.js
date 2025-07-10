import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getQuestionsForLesson } from '../data/lessonData';

const STAGE_COUNT = 6;

const QuizScreen = ({ navigation, route }) => {
    const { lessonId, lessonIndex } = route.params;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showFeedback, setShowFeedback] = useState(false);
    const [quizAnswers, setQuizAnswers] = useState([]);
    const [wrongCount, setWrongCount] = useState(0);
    const [quizFailed, setQuizFailed] = useState(false);

    const questions = getQuestionsForLesson(lessonId);
    const currentQuestion = questions[currentQuestionIndex];

    useEffect(() => {
        setCurrentQuestionIndex(0);
        setSelectedAnswer(null);
        setShowFeedback(false);
        setQuizAnswers([]);
        setWrongCount(0);
        setQuizFailed(false);
    }, [lessonId]);

    const handleAnswerSelect = (answerIndex) => {
        if (selectedAnswer !== null || quizFailed) return;
        setSelectedAnswer(answerIndex);
        const isCorrect = answerIndex === currentQuestion.correctAnswer;
        setQuizAnswers([...quizAnswers, { isCorrect }]);
        if (!isCorrect) {
            const newWrong = wrongCount + 1;
            setWrongCount(newWrong);
            if (newWrong >= 2) {
                setQuizFailed(true);
                setTimeout(() => {
                    Alert.alert('Başarısız', '2 yanlış yaptınız. Aşamayı tekrar denemelisiniz.', [
                        { text: 'Tamam', onPress: () => navigation.goBack() },
                    ]);
                }, 1200);
                return;
            }
        }
        setShowFeedback(true);
        setTimeout(() => {
            if (currentQuestionIndex < questions.length - 1) {
                nextQuestion();
            } else {
                finishQuiz();
            }
        }, 1200);
    };

    const nextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
        setShowFeedback(false);
    };

    const finishQuiz = () => {
        if (wrongCount < 2) {
            console.log('Quiz başarılı, aşama durumu kaydediliyor...');
            navigation.navigate('Results', {
                correctAnswers: questions.length - wrongCount,
                totalQuestions: questions.length,
                accuracy: Math.round(((questions.length - wrongCount) / questions.length) * 100),
                lessonId,
                lessonIndex,
            });
        } else {
            setQuizFailed(true);
            setTimeout(() => {
                Alert.alert('Başarısız', '2 yanlış yaptınız. Aşamayı tekrar denemelisiniz.', [
                    { text: 'Tamam', onPress: () => navigation.goBack() },
                ]);
            }, 1200);
        }
    };

    const getOptionStyle = (index) => {
        if (selectedAnswer === null) {
            return styles.option;
        }
        if (index === currentQuestion.correctAnswer) {
            return [styles.option, styles.correctOption];
        }
        if (index === selectedAnswer && selectedAnswer !== currentQuestion.correctAnswer) {
            return [styles.option, styles.incorrectOption];
        }
        if (index === selectedAnswer) {
            return [styles.option, styles.selectedOption];
        }
        return styles.option;
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.content}>
                <View style={styles.progressContainer}>
                    <Text style={styles.progressText}>
                        {currentQuestionIndex + 1}/{questions.length}
                    </Text>
                    <View style={styles.progressBar}>
                        <View
                            style={[
                                styles.progressFill,
                                { width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }
                            ]}
                        />
                    </View>
                </View>

                <View style={styles.questionContainer}>
                    <Text style={styles.questionText}>{currentQuestion.question}</Text>
                    <View style={styles.optionsContainer}>
                        {currentQuestion.options.map((option, index) => (
                            <TouchableOpacity
                                key={index}
                                style={getOptionStyle(index)}
                                onPress={() => handleAnswerSelect(index)}
                                disabled={selectedAnswer !== null || quizFailed}
                            >
                                <Text style={styles.optionText}>{option}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {showFeedback && (
                    <View style={styles.feedbackContainer}>
                        <View style={styles.feedbackContent}>
                            <Ionicons
                                name={selectedAnswer === currentQuestion.correctAnswer ? "checkmark-circle" : "close-circle"}
                                size={60}
                                color={selectedAnswer === currentQuestion.correctAnswer ? "#28a745" : "#dc3545"}
                            />
                            <Text style={styles.feedbackTitle}>
                                {selectedAnswer === currentQuestion.correctAnswer ? "Doğru!" : "Yanlış!"}
                            </Text>
                            <Text style={styles.feedbackText}>
                                {currentQuestion.explanation}
                            </Text>
                        </View>
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    );
    
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#e9ecef',
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    backButtonText: {
        marginLeft: 5,
        fontSize: 16,
        color: '#666',
    },
    progressContainer: {
        alignItems: 'flex-end',
        marginBottom:10
    },
    progressText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
        marginBottom: 5,
    },
    progressBar: {
        width: 120,
        height: 8,
        backgroundColor: '#e9ecef',
        borderRadius: 4,
        overflow: 'hidden',
    },
    progressFill: {
        height: '100%',
        backgroundColor: '#4facfe',
        borderRadius: 4,
    },
    content: {
        flex: 1,
        padding: 20,
    },
    questionContainer: {
        backgroundColor: '#f8f9fa',
        borderRadius: 16,
        padding: 20,
        marginBottom: 20,
    },
    questionText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        marginBottom: 20,
        lineHeight: 24,
    },
    optionsContainer: {
        gap: 12,
    },
    option: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#e9ecef',
        borderRadius: 12,
        padding: 15,
    },
    correctOption: {
        borderColor: '#28a745',
        backgroundColor: '#d4edda',
    },
    incorrectOption: {
        borderColor: '#dc3545',
        backgroundColor: '#f8d7da',
    },
    selectedOption: {
        borderColor: '#4facfe',
        backgroundColor: '#e3f2fd',
    },
    optionText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#333',
        lineHeight: 22,
    },
    feedbackContainer: {
        backgroundColor: 'white',
        borderRadius: 16,
        padding: 20,
        alignItems: 'center',
    },
    feedbackContent: {
        alignItems: 'center',
    },
    feedbackTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 15,
        marginBottom: 10,
    },
    feedbackText: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        lineHeight: 22,
        marginBottom: 15,
    },
});

export default QuizScreen; 